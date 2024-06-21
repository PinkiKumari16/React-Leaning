import React from 'react'
import { Question } from '../components/general questions/Question.jsx'
import styles from '../components/general questions/Question.module.css'
import questionList from '../components/general questions/questionData.json';

export const GeneralPage = () => {
  return (
    <>
        <div className={styles.questionPage}>
          <div className={styles.mainBox}>
            <h1>General Question</h1>
            {questionList.map((element, ind)=><Question id={ind} questionData={element.questionData} answerData = {element.answerData}/>)}
          </div>
        </div>
    </>
  )
}
