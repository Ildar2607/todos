import React, { memo } from 'react';
import { SFilterButton, SFooterContainer } from './Footer.styled';

interface FooterProps {
  activeTasksCount: number;
  filter: string;
  setFilter: (filter: string) => void;
  clearCompleted: () => void;
}

const Footer: React.FC<FooterProps> = memo(({ activeTasksCount, filter, setFilter, clearCompleted }) => {
  return (
    <SFooterContainer>
      <span>{activeTasksCount} items left</span>
      <div>
        <SFilterButton onClick={() => setFilter('all')} selected={filter === 'all'}>
          All
        </SFilterButton>
        <SFilterButton onClick={() => setFilter('active')} selected={filter === 'active'}>
          Active
        </SFilterButton>
        <SFilterButton onClick={() => setFilter('completed')} selected={filter === 'completed'}>
          Completed
        </SFilterButton>
      </div>
      <button onClick={clearCompleted}>Clear completed</button>
    </SFooterContainer>
  );
});

export default Footer;
