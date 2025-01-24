'use client';
import { useState } from 'react';
import styles from './page.module.css';
import { Button } from '@/components/Button';
import { TextBox } from '@/components/TextBox';
import Link from 'next/link';

export default function Home() {
  // ボタンクリックイベントを別で定義するパターン
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          <div>
            <TextBox value={count} readOnly></TextBox>
          </div>
          <div>
            <Button text='ボタン' onClick={handleClick} />
          </div>
          <div>
            <Link href='./StyledTextBox'>StyledTextBox</Link>
          </div>
        </div>
      </main>
    </div>
  );

  // ボタンクリックイベントを省略して書くパターン
  // const [count, setCount] = useState(0);

  // return (
  //   <div className={styles.page}>
  //     <main className={styles.main}>
  //       <div className={styles.ctas}>
  //         <div>
  //           <TextBox value={count} readOnly></TextBox>
  //         </div>
  //         <div>
  //           <Button text='ボタン' onClick={() => setCount(count + 1)} />
  //         </div>
  //       </div>
  //     </main>
  //   </div>
  // );
}
