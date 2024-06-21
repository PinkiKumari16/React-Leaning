import React, { useState } from 'react'
import styles from './Question.module.css';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';

export const Question = ({questionData, answerData}) => {
  let [isShowAnswer, setIsShowAnswer] = useState(false);
  let [isAnimating, setIsAnimating] = useState(false);

  const toggleIcon = () =>{
    setIsAnimating(true);

    setTimeout(() => {
      setIsShowAnswer(!isShowAnswer)
      setIsAnimating(false)
    },500)

    
  }

  return (
    <>
        <div className={styles.questionBox}>
          <div className={styles.questionList}>
            {questionData}
            {(isShowAnswer)? (
              <IndeterminateCheckBoxOutlinedIcon 
                onClick={toggleIcon} 
                className={`${styles.icon} ${isAnimating ? styles.rotateAnimation: styles.rotate-90}`}
              />
            ):(
              <AddBoxOutlinedIcon 
                onClick={toggleIcon} 
                className={`${styles.icon} ${isAnimating ? styles.rotateAnimation : ''}`}
              />
            )}
          </div>
          {(isShowAnswer) && <div className={styles.answerBox}>
            <hr></hr>
            <p className={styles.answer}>{answerData}</p>
          </div>}
        </div>        
    </>
  )
}

