export interface UserProps {
    avatar_url: string;
    name: string;
    joinedAt: string;
    login: string;
    bio: string;
    public_repos: string;
    followers: string;
    following: string;
    location: string;
    twitter_username: string;
    blog: string;
    company: string;
}
  
export interface TopAreaProps {
    setUser: (user: UserProps | null) => void;
}
  
export interface UserDataProps {
    user: UserProps;
}