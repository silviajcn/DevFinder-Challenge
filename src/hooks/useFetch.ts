import { useEffect, useState } from 'react';
import { UserProps } from '../types';
import { joinedDate } from '../utils/formatter';

export const useFetch = (user: string | undefined) => {

    const url = `https://api.github.com/users/${user}`;

    const [userGithub, setUserGithub] = useState<UserProps | null>(null);
	const setUserData = (userGithub: UserProps | null): void => {
		setUserGithub(userGithub);
	}

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        notFound: false,
    });

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true
        });

        const resp = await fetch(url);
        const data = await resp.json();
        //console.log(data);
        

        if (resp.status != 200) {
            setState({
               data,
               isLoading: false,
               notFound: true,
           });
            return;
        }

        setState({
            data,
            isLoading: false,
            notFound: false,
        });

        const userGitHub: UserProps = {
            avatar_url: data.avatar_url,
            name: data.name,
            joinedAt: joinedDate(data.created_at),
            login: data.login,
            bio: data.bio,
            public_repos: data.public_repos,
            followers: data.followers,
            following: data.following,
            location: data.location,
            twitter_username: data.twitter_username,
            company: data.company,
            blog: data.blog,
        };
        setUserData(userGitHub);
    }
    
    useEffect(() => {
        getFetch();
    }, [url]);
    
    return {
        data: state.data,
        isLoading: state.isLoading,
        notFound: state.notFound,
        userGithub
    };
    
}