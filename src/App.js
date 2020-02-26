import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
const githubProfileQuery = gql`
  {
    github {
      user(username: "tamaradanhash") {
        id
        avatar_url
        repos {
          name
        }
      }
    }
  }
`;

export default function App() {
  const { loading, error, data } = useQuery(githubProfileQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Sorry, retrieveing the Currency data did fail.</p>;

  return (
    <div>
      <div> User Id: {data.github.user.id}</div>
      <div>
        <img src={data.github.user.avatar_url} alt="github profile avatar" />
      </div>
      <div>
        {' '}
        Repos:
        {data.github.user.repos.map(repo => {
          return (
            <div key={repo.name}>
              <p style={{ border: '1px solid grey', marginBottom: '20px' }}>
                {repo.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
