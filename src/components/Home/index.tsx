import { FC } from 'react';

import { CategoriesConnection } from '@/__generated__/graphql';

type HomeProps = {
  categories: CategoriesConnection;
};

const Home: FC<HomeProps> = ({ categories }) => (
  <div className="flex flex-col items-center gap-4">
    <h1>Main page</h1>
    <ul>
      {categories.edges.map(({ node }) => (
        <li key={node.id}>{node.name}</li>
      ))}
    </ul>
  </div>
);

export default Home;
