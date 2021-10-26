import React from 'react';
import {
  useQuery,
  gql,
} from '@apollo/client';
import './App.css';

const GET_ACTIVITIES = gql`
  query GetActivities {
    getActivities {
      id
      title
    }
  }
`;

interface Activity {
  id: number;
  title: string;
  description?: string;
}

interface ActivityListData {
  getActivities: Activity[]
}

interface ActivityListVars {}

function App() {
  const { loading, error, data } = useQuery<ActivityListData, ActivityListVars>(GET_ACTIVITIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return <div className="App">
    {
      data?.getActivities.map(({ id, title }) => (
        <div key={id}>{title}</div>
      ))
    }
  </div>;
}

export default App;
