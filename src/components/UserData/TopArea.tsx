import { Info, Pfp, SideInfo, Name, Username, JoinedAt, Bio } from './Styles';

interface TopAreaProps {
  login: string;
  bio: string;
  name: string;
  joinedAt: string;
  pfp: string;
}

export const TopArea = ({
  login,
  name,
  joinedAt,
  bio,
  pfp,
}: TopAreaProps) => {
  return (
    <>
      <Info>
        <Pfp src={pfp} alt={name} />
        <SideInfo>
          <Name>{name}</Name>
          <Username>
            <a href={`https://github.com/${login}`} target="_blank">@{login}</a>
          </Username>
          <JoinedAt>{joinedAt}</JoinedAt>
        </SideInfo>
      </Info>
      <Bio>{bio}</Bio>
    </>
  )
};