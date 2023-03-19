import { useState, useRef, FormEvent } from 'react';
import { Container, InputArea, InputLabel, Input, Warn, SubmitBtn } from './StylesTopArea';
import { useFetch } from '../hooks/useFetch';
import { useForm } from '../hooks/useForm';
import { UserData } from './UserData';
import { Loader } from './loader';
import { ChangeTheme } from './header';

export const TopArea = () => {

  const usernameRef = useRef<HTMLInputElement>(null);
  const [inputUser, setInputUser] = useState("octocat");

  const { onInputChange, onResetForm } = useForm();

  const hadleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (
      usernameRef.current?.value.trim() === "" || usernameRef.current?.value === undefined
    ) return;

    setInputUser(usernameRef.current.value);
    onResetForm();
  }

  const { isLoading, notFound, userGithub } = useFetch(inputUser);
    
  return (
    <>
      <Container>
        <ChangeTheme />

        <InputArea
          onSubmit={hadleSubmit}
        >
          <InputLabel htmlFor='username'>
            <img src="/assets/icon-search.svg"  alt="Search ..."/>
          </InputLabel>

          <Input
            ref={usernameRef}
            name="username"
            id="username"
            type="text"
            placeholder="Search username..."
            onChange={onInputChange}
          />

          {notFound && <Warn>Not Found</Warn>}

          <SubmitBtn type="submit">Search</SubmitBtn>
        </InputArea>
      </Container>

      {
        isLoading && (<Loader />)
      }
      
      {userGithub && <UserData user={userGithub} />}
    </>
      
    )
};