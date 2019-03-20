import React, { Component } from 'react';
import Select from 'react-select';
import './ChapterToolbar.css'


export default class ChapterToolbar extends Component {
  
  createNewChapterObject = (name, value) => {
    return {label: name, value: value}
  }

  render() {
    let chapters = [];
    let i = 0;
    while (i < this.props.chapters.length){
      chapters.push(this.createNewChapterObject(this.props.chapters[i], i));
      i++
    }

    return (
      <div className='endBelow'>
        <Select options={chapters} defaultValue = {chapters[0]} isSearchable = {false} onChange={(value) =>this.props.changeChapter(value.value)}/>
      </div>
    )
  }
}