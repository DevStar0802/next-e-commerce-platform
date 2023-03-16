import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { Paragraph } from '@/components/molecules/Paragraph';
import TeamOverView from '@/components/organisms/Tables/TeamOverview';
import { USERS_QUERY } from '@/queries/users';
import Loading from '../Loading';
import InviteUsers, { User } from './InviteUsers';
import { apiConfig } from '@/utils/apiConfig';
import { UserOrganizationResourceApi } from 'client/command';
import { useState } from 'react';
import Toast from '../Toast';

const Teams = () => {
  const router = useRouter();
  const organizationId = Number(router?.query?.id);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const { data, loading } = useQuery(USERS_QUERY, {
    variables: { organizationId },
  });

  const handleErrorMesssage = (message: string) => {
    setErrorMessage(message);

    setTimeout(() => {
      setErrorMessage('');
    }, 3000);
  };

  const handleSuccessMesssage = (message: string) => {
    setSuccessMessage(message);

    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  const handleRemoveUser = async (userId: number) => {
    try {
      const config = await apiConfig();
      const api = new UserOrganizationResourceApi(config);
      await api.apiUserOrganizationRemoveUserFromOrganizationPut(
        organizationId,
        userId
      );
      handleSuccessMesssage('User removed successfully!');
    } catch (error: any) {
      handleErrorMesssage(error?.message || 'Failed to remove user!');
      console.error(error);
    }
  };

  const handleUploadInviteUsers = (users: User[]) => {
    console.log(users);
  };

  return (
    <div>
      <Paragraph
        size="xl"
        className="!text-shades-black !font-light tracking-[0.06em] !leading-[32px]"
      >
        Invite co-workers to join your company account.
      </Paragraph>
      <InviteUsers handleInviteUsers={handleUploadInviteUsers} />
      <div>
        <Paragraph
          size="xl"
          className="mb-4 mt-8 !text-shades-black !font-light tracking-[0.06em] !leading-[32px]"
        >
          Team Overview
        </Paragraph>
        {loading ? (
          <Loading message="Loading users..." />
        ) : (
          <TeamOverView
            teams={data?.usersByOrganizationId || []}
            handleRemoveUser={handleRemoveUser}
          />
        )}
      </div>
      <Toast successMessage={successMessage} errorMessage={errorMessage} />
    </div>
  );
};

export default Teams;
