import { ContainerStartArea, DataStartArea } from './Styles';


interface StartsAreaProps {
  repos: string;
  followers: string;
  following: string;
}

export const StartArea = ({repos, followers, following} : StartsAreaProps) => {
  return (
    <ContainerStartArea>
      <DataStartArea>
        <span>Repos:</span>
        <strong>{repos}</strong>
      </DataStartArea>

      <DataStartArea>
        <span>Followers:</span>
        <strong>{followers}</strong>
      </DataStartArea>

      <DataStartArea>
        <span>Following:</span>
        <strong>{following}</strong>
      </DataStartArea>
    </ContainerStartArea>
  )
};
