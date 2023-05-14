import { FC } from 'react';
import clsx from 'clsx';
import { StaticImageData } from 'next/image';
import { Badge } from '../../Badge';
import { Checkbox } from '../../Checkbox';
import styles from './product.module.css';
import { ProductWithCollectionsGraphqlDto } from '@/generated/types';
import {
  clsProductCard,
  clsProductCardId,
  clsProductCardPrice,
  clsProductCardPrices,
  clsProductCardTags,
  clsProductCardTitle,
  currencies,
} from './utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { VariantColors } from '../../ColorVariant';
import moment from 'moment';

export interface ProductCardProps extends ProductWithCollectionsGraphqlDto {
  size?: 'lg' | 'sm';
  imageUrl?: StaticImageData | string;
  isSelectable?: boolean;
  isSelected?: boolean;
  onSelect?: () => void;
}

const ProductCardWrapper: FC<{
  id: unknown;
  children: JSX.Element;
  isSelectable?: boolean;
}> = ({ id, isSelectable, children }) => {
  const router = useRouter();
  if (!isSelectable && (typeof id === 'number' || typeof id === 'string')) {
    return (
      <Link
        href={`/organization/${router.query.id || '1'}/discover/products/${id}`}
        className="print:h-full"
      >
        {children}
      </Link>
    );
  }
  return children;
};

export const ProductCard: FC<ProductCardProps> = ({
  size = 'lg',
  style_number,
  style_name,
  imageUrl,
  isSelectable,
  isSelected,
  onSelect = () => {},
  associated_prices,
  colour_families,
  collections,
  size_options,
  compositions,
  first_category,
  id,
  delivery_window_start_date,
  delivery_window_end_date,
}) => {
  const renderCheckbox = isSelectable && (
    <div className={clsx(styles.productCardCheckbox, 'print:hidden')}>
      <Checkbox checked={isSelected} onChange={onSelect} />
    </div>
  );

  return (
    <ProductCardWrapper isSelectable={isSelectable} id={id}>
      <div
        className={clsx(
          clsProductCard(size),
          'print:break-inside-avoid-page print:h-full'
        )}
      >
        <div
          className={clsx(
            clsProductCardId(size),
            'whitespace-nowrap text-ellipsis overflow-hidden'
          )}
        >
          {style_number}
        </div>
        <div>
          <div
            className={clsx(
              styles.productCardImageWrapper,
              size === 'lg' ? 'w-[320px] h-[320px]' : 'w-[144px] h-[144px]'
            )}
          >
            <div className="absolute top-0 left-0 h-full w-full rounded-lg bg-[rgba(0,0,0,0.1)]" />
            {imageUrl && (
              <img
                src={typeof imageUrl === 'string' ? imageUrl : imageUrl.src}
                alt={style_name + 'image'}
                className={clsx(
                  'rounded-lg object-cover',
                  size === 'lg' ? 'w-[320px] h-[320px]' : 'w-[144px] h-[144px]'
                )}
              />
            )}
            {renderCheckbox}
          </div>
          <h3 className={clsProductCardTitle(size)}>{style_name}</h3>
          <VariantColors
            colors={!!colour_families ? (colour_families as string[]) : []}
          />
          <div className={clsx(clsProductCardTags(size), 'mt-4 flex-wrap')}>
            {collections?.map((collection: any) => (
              <div key={collection?.id} className="mb-1">
                <Badge size={size}>{collection?.name}</Badge>
              </div>
            ))}
          </div>
          <ListView
            label="Material"
            title={compositions?.join(', ') || ''}
            size={size}
          />
          {associated_prices?.map(
            (item) =>
              (item?.landed || item?.exworks || item?.landed) && (
                <div
                  key={item?.currency}
                  className={clsProductCardPrices(size)}
                >
                  {item?.landed ? (
                    <>
                      <div>
                        <h5 className={clsProductCardPrice(size)}>
                          {item?.currency && currencies[item.currency]}
                          {item.landed}
                        </h5>
                        <p className={styles.priceLabel}>Landed</p>
                      </div>
                    </>
                  ) : null}
                  {item?.exworks ? (
                    <>
                      <div>
                        <h5 className={clsProductCardPrice(size)}>
                          {item?.currency && currencies[item.currency]}
                          {item.exworks}
                        </h5>
                        <p className={styles.priceLabel}>Exworks</p>
                      </div>
                    </>
                  ) : null}
                  {item?.retail ? (
                    <>
                      <div>
                        <h5 className={clsProductCardPrice(size)}>
                          {item?.currency && currencies[item.currency]}
                          {item.retail}
                        </h5>
                        <p className={styles.priceLabel}>MSRP</p>
                      </div>
                    </>
                  ) : null}
                </div>
              )
          )}
          <ListView label="Category" title={first_category || ''} size={size} />
          <ListView
            label="Delivery Window"
            title={
              delivery_window_start_date && delivery_window_end_date
                ? `${moment(delivery_window_start_date)?.format(
                    'DD/MM/YYYY'
                  )} - ${moment(delivery_window_end_date)?.format(
                    'DD/MM/YYYY'
                  )}`
                : ''
            }
            size={size}
          />
          <ListView
            label="Sizes"
            title={size_options?.join(', ') || ''}
            size={size}
          />
        </div>
      </div>
    </ProductCardWrapper>
  );
};

const ListView: FC<{ title: string; label: string; size: 'lg' | 'sm' }> = ({
  label,
  title,
  size,
}) => {
  return (
    <>
      {title && (
        <div className="hidden print:block mt-1">
          <h5 className={clsx(clsProductCardPrice(size))}>{title}</h5>
          <p className={styles.priceLabel}>{label}</p>
        </div>
      )}
    </>
  );
};
