import React, { Component } from 'react';
import Select from 'react-select';
import './ChapterToolbar.css'


export default class ChapterToolbar extends Component {
  render() {
    const chapters = [
      { label: "Tutorial", value: 0 },
      { label: "Chapter 1", value: 1 },
      { label: "Chapter 2", value: 2 },
      { label: "Chapter 3", value: 3 },
    ];

    return (
      <div className='endBelow'>
        <Select options={chapters} defaultValue = {chapters[0]} isSearchable = {false} onChange={(value) =>this.props.changeChapter(value.value)}/>
      </div>
    )
  }
}