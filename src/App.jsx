// import { useState, useEffect } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import './App.css';

const items = [
  {
    id: 'item- 0',
    content: 'item 0',
  },
  {
    id: 'item- 1',
    content: 'item 1',
  },
  {
    id: 'item- 2',
    content: 'item 2',
  },
  {
    id: 'item- 3',
    content: 'item 3',
  },
  {
    id: 'item- 4',
    content: 'item 4',
  },
];

/* 並び替え */
const reorder = (list, startIndex, endIndex) => {
  const removed = list.splice(startIndex, 1); //ドラッグ開始要素の削除
  console.log(removed);
  list.splice(endIndex, 0, removed[0]); //ドロップした箇所に挿入
};

/* スタイル */
const grid = 8;

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 250,
});

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid} 0`,
  background: isDragging ? 'lightgreen' : 'pink',

  ...draggableStyle, //あらかじめ用意されている。
});

// 装飾:inline style
const containerStyle = {
  margin: '2rem 5rem',
  padding: '30px',
  background: 'yellow',
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

function App() {
  const onDragEnd = (result) => {
    // console.log(result);
    if (!result.destination) {
      return;
    }
    reorder(items, result.source.index, result.destination.index);
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ marginBottom: '3rem' }}>library：react-beautiful-dnd</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
