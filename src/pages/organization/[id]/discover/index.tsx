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

const StoryPage = () => {
  const [activeTab, setActiveTab] = useState<string | number>('story');
  const router = useRouter();

  const tabs = [
    {
      id: 'story',
      label: 'Story',
      content: (
        <Story onViewCollections={() => handleTabChange('collections')} />
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
      content: <Collections />,
    },
  ];

  const handleTabChange = (id: string | number) => {
    router.push(`/organization/1/discover?tab=${id}`);
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
            <ShowcaseLogo />
          </div>
          <div className="flex-1">
            {router?.query?.tab !== 'story' && (
              <div className="mt-8">
                <Button
                  as="a"
                  variant="link"
                  href={`/organization/${router?.query?.id}/discover/product-ingestion`}
                  className="!max-w-[205px] !ml-auto !mr-0"
                >
                  <Icon name="icon-add" />{' '}
                  {router?.query?.tab === 'collections'
                    ? 'Add Collections'
                    : 'Add Products'}
                </Button>
              </div>
            )}
          </div>
        </div>
        <Tabs
          tabs={tabs}
          active={activeTab}
          className="justify-center"
          onTabChange={handleTabChange}
        />
      </div>
    </ShowcaseLayout>
  );
};

export default StoryPage;