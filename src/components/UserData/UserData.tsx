import { TopArea,StartArea, LinksArea } from '.';
import { UserDataProps } from '../../types/types';
import { ContainerUserData, PfpUserData, SideArea } from './Styles';

export const UserData = ({user}: UserDataProps) => {
  return (
    <ContainerUserData>
      <PfpUserData src={user.avatar_url} alt={"Photo" + user.name} />
      
      <SideArea>
        <TopArea
          login={user.login}
          bio={user.bio}
          name={user.name}
          joinedAt={user.joinedAt}
          pfp={user.avatar_url}
        />

        <StartArea
          repos={user.public_repos}
          followers={user.followers}
          following={user.following}
        />

        <LinksArea
          location={user.location}
          twitter={user.twitter_username}
          blog={user.blog}
          company={user.company}
        />
      </SideArea>

      
    </ContainerUserData>
  )
};