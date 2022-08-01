import React from 'react';

import { Repository } from '../../store/ducks/repositories/types';

interface OwnProps {
  repository: Repository
}

export default function RepositoryItem({ repository }: OwnProps) {

  const breed = repository.breeds[0]
  console.log('**repository', repository)
  console.log('**breed', breed)
  return (
    <>
      <h1>{breed.name} </h1>
      <img src={repository.url} />
    </>);
}
