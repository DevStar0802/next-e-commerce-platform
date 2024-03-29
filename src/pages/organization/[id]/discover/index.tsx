import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ShowcaseLayout from '@/components/layouts/ShowcaseLayout';
import Tabs from '@/components/molecules/Tab/Tabs';
import Collections from '@/components/page-components/showcase/Collections';
import ShowcaseLogo from '@/components/page-components/showcase/Logo';
import Products from '@/components/page-components/showcase/Products';
import Story from '@/components/page-components/showcase/Story';
import { Button } from '@/components/molecules/Button';
import { Icon } from '@/components/molecules/Icon';
import { useQuery } from '@apollo/client';
import { ORGANIZATION_QUERY } from '@/queries/organizations';
import Loading from '@/components/page-components/Loading';

const StoryPage = () => {
  const [activeTab, setActiveTab] = useState<string | number>('story');
  const [isAddCollections, setIsAddCollections] = useState(false);
  const router = useRouter();
  const tab = router?.query?.tab;

  const { data, loading, refetch } = useQuery(ORGANIZATION_QUERY, {
    variables: { organizationId: Number(router?.query?.id) },
    fetchPolicy: 'cache-and-network',
    skip: !router?.query?.id
  });
  const organization = data?.organizationByOrganizationId || {};

  const handleScroll = () => {
    const doc: Document = document;
    const tabs: any = document?.getElementById('tab-menu');
    const filters: any = doc.getElementById('filters');

    if(tabs) {
      if(doc?.scrollingElement && doc?.scrollingElement?.scrollTop >= 200) {
        tabs.style.position = 'fixed';
        tabs.style.top = '72px';
      } else {
        tabs.style.position = '';
      }
    }

    if(filters) {
      if(doc?.scrollingElement && doc?.scrollingElement?.scrollTop >= 220) {
        filters.style.position = 'fixed';
        filters.style.top = '128px';
        filters.style.left = '0px';
        filters.style.right = '0px';
      } else {
        filters.style.position = '';
        filters.style.top = '';
        filters.style.left = '';
        filters.style.right = '';
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  const tabs = [
    {
      id: 'story',
      label: 'Story',
      content: loading ? (
        <Loading message="Fetching data..." />
      ) : (
        <Story
          onViewCollections={() => handleTabChange('collections')}
          organization={organization}
          refetch={refetch}
        />
      ),
    },
    {
      id: 'products',
      label: 'Products',
      content: <Products />,
    },
    {
      id: 'collections',
      label: 'Collections',
      content: (
        <Collections
          addCollectionsModal={isAddCollections}
          toggleCollectionsModal={setIsAddCollections}
        />
      ),
    },
  ];

  const handleTabChange = (id: string | number) => {
    if (!router?.query?.id) return;
    const productId = router?.query?.product_id;
    let url = `/organization/${router?.query?.id}/discover?tab=${id}`;
    if(productId) {
      url += `&product_id=${productId}`;
    }
    router.push(url);
    setActiveTab(id);
  };

  useEffect(() => {
    if (router.isReady) {
      const activeTab = (router.query?.tab || 'story') as string | number;
      handleTabChange(activeTab);
    }
  }, [router.isReady]);

  return (
    <ShowcaseLayout>
      <div className="mx-auto overflow-x-hidden">
        <div className="mx-auto w-full max-w-[1440px] flex justify-between px-[64px]">
          <div className="flex-1"></div>
          <div className="flex-1">
            <ShowcaseLogo logoUrl={organization?.logo_url} name={organization?.name || ''} />
          </div>
          <div className="flex-1">
            {tab && tab !== 'story' && (
              <div className="mt-8">
                <Button
                  as={tab === 'products' ? 'a' : 'button'}
                  variant="link"
                  onClick={() =>
                    tab === 'collections' && setIsAddCollections(true)
                  }
                  href={
                    tab === 'products'
                      ? `/organization/${router?.query?.id}/discover/product-ingestion`
                      : undefined
                  }
                  className="!max-w-[205px] !ml-auto !mr-0"
                >
                  <Icon name="icon-add" />{' '}
                  {tab === 'collections' ? 'Add Collections' : 'Add Products'}
                </Button>
              </div>
            )}
          </div>
        </div>
        <Tabs
          tabs={tabs}
          active={activeTab}
          className="justify-center w-fit mx-auto [&>div]:w-[124px] [&>div:nth-child(2)]:mx-2"
          onTabChange={handleTabChange}
        />
      </div>
    </ShowcaseLayout>
  );
};

export default StoryPage;
