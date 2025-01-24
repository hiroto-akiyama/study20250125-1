# 第三回トリアエズナマの会

## React.js と Next.js の違い

### React.js について

React.js は、ウェブサイトの「パーツ」を作るためのツールです。  
例えば、ボタンやテキスト、画像など、ウェブサイトの一部分を作るのに使います。  
React を使うと、ウェブページが動きやすく、リアルタイムで変化することが簡単にできます。  
React は「レゴブロック」のようなもので、それぞれのパーツを組み合わせて、ひとつの大きなウェブサイトを作ります。

### Next.js について

Next.js は、React をもっと便利に使うためのツールです。  
Next.js は、React を使ってウェブサイトを作るときに、ページを速く表示したり、  
SEO（検索エンジンで見つけやすくする）を手伝ってくれる特別な機能がたくさんついています。
最近の新規開発では React.js のみで開発する事はほとんどない。

## Next.js の インストール

1. Tailwind CSS はお好みで
2. src ディレクトリの作成もお好みで（今回は作成した状態で説明します）
3. App Router と Turbooack は使用するのをオススメします
4. alias の設定もオススメします

```
npx create-next-app@latest
Ok to proceed? (y)
? What is your project named? › app
? Would you like to use TypeScript? › No / [Yes]
? Would you like to use ESLint? › No / [Yes]
? Would you like to use Tailwind CSS? › [No] / Yes
? Would you like your code inside a `src/` directory? › No / [Yes]
? Would you like to use App Router? (recommended) › No / [Yes]
? Would you like to use Turbopack for `next dev`? › No / [Yes]
? Would you like to customize the import alias (`@/*` by default)? › No / [Yes]
? What import alias would you like configured? › @/*
```

インストールが完了したらプロジェクトのフォルダに移動してコマンドラインからデバッグ実行してみましょう。

```
cd app
yarn dev
```

## コンポーネントを作成してみよう

React は UI をコンポーネントという単位で管理します。  
コンポーネントは画面に表示する内容を定義する関数やクラスの事です。

1. src フォルダ直下に"components/Button"フォルダを作成します
2. 作成した Button フォルダの下に index.tsx ファイルを作成します
3. Button コンポーネントを定義します
4. src フォルダ直下に"components/TextBox"フォルダを作成します
5. 作成した TextBox フォルダの下に index.tsx ファイルを作成します
6. TextBox コンポーネントを定義します

コンポーネントはコンポーネント名のフォルダを作成して定義する事をオススメします

### 作成したコンポーネントを使用してみよう

1. app/page.tsx で Button コンポーネントを使用します
2. page.tsx に`'use client';`を記載してクライアントコンポーネントとする

## デバッグ実行してみよう

- app ディレクトリに移動して`yarn dev`と入力する
- VSCode の **実行とデバッグ** でデバッグ実行の設定を行う

<details><summary>launch.jsonサンプル</summary>
```
{
  // IntelliSense を使用して利用可能な属性を学べます。
  // 既存の属性の説明をホバーして表示します。
  // 詳細情報は次を確認してください: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Start Next.js debug",
      "type": "node-terminal",
      "request": "launch",
      "command": "yarn dev",
      "cwd": "${workspaceFolder}/app"
    }
  ]
}
```
</details>

## useState：状態管理と useEffect：副作用

#### useState：状態管理

React では、UI がどのように表示されるかを管理するために「状態（State）」を使います。  
状態は、アプリケーションのデータや、ユーザーが操作した結果として変わるものです。  
例えば、ボタンがクリックされた回数や、入力されたテキストなどが状態にあたります。  
State（ステート）は、コンポーネント内で管理されるデータのことです。  
このデータが変わると、そのデータに依存する部分が再描画されます。  
State を使うことで、ユーザーの操作に応じて UI を動的に更新することができます。
例えば、カウンターのアプリでボタンを押すたびに数字が増える場合、その数字は State で管理します。
この State を useState という関数を使って管理します。

#### 例 1:シンプルなカウンター

```
import React, { useState } from 'react';

function Counter() {
  // Stateの定義: countはStateの名前、setCountはその状態を更新するための関数
  const [count, setCount] = useState(0); // 初期値を0に設定

  return (
    <div>
      <p>カウント：{count}</p>
      <button onClick={() => setCount(count + 1)}>カウントアップ</button>
    </div>
  )
}
```

- useState の引数には状態の初期値を設定する
- useState は、状態とその状態を更新するための関数（ここでは setCount）を返します。

#### useEffect：副作用

React.js の useEffect フックは、関数コンポーネントで副作用（サイドエフェクト）を実行するために使います。  
副作用とはデータの取得、DOM の操作、サブスクリプションの設定などレンダリングの結果として発生する操作のことです。

- データの取得

```
import React, { useEffect, useState } from 'react';

function ExampleComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // データを取得する副作用
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));

    // クリーンアップ関数を返す
    return () => {
      // クリーンアップ処理
      console.log('Component unmounted');
    };
  }, []); // 空の依存配列を渡すことで、コンポーネントのマウント時にのみ実行される

  return (
    <div>
      {data ? <p>{data}</p> : <p>Loading...</p>}
    </div>
  );
}

export default ExampleComponent;
```

- DOM の要素にアクセスして操作する例

```
import React, { useEffect, useRef } from 'react';

function DOMManipulationComponent() {
  const divRef = useRef(null);

  useEffect(() => {
    // DOM要素にアクセスして操作する
    if (divRef.current) {
      divRef.current.style.backgroundColor = 'lightblue';
      divRef.current.innerText = 'This text was set by useEffect!';
    }
  }, []); // 空の依存配列を渡すことで、コンポーネントのマウント時にのみ実行される

  return (
    <div ref={divRef}>
      Initial text
    </div>
  );
}

export default DOMManipulationComponent;
```

- WebSocket を使用してサブスクリプションを設定する例

```
import React, { useEffect, useState } from 'react';

function WebSocketComponent() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // WebSocketのサブスクリプションを設定
    const socket = new WebSocket('wss://example.com/socket');

    socket.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    // クリーンアップ関数を返す
    return () => {
      socket.close();
    };
  }, []); // 空の依存配列を渡すことで、コンポーネントのマウント時にのみ実行される

  return (
    <div>
      <h2>Messages</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
}

export default WebSocketComponent;
```

## styled-component

Styled-components は、JavaScript と CSS を組み合わせて、　　
React コンポーネントにスタイルを適用するためのライブラリです。　　
これにより、CSS を JavaScript の中に直接書き込むことができ、　　
コンポーネントごとにスタイルをカプセル化することができます。

### styled-component で変わる事

styled-components を使うことで、React の inline styling や sass での styling から２つのことが大きく変わります。

```
// styled-components以前
<Button className='button'></Button>
<Button className='button button--primary'></Button>

// styled-components
<Button><Button/>
<Button primary></Button>
```

### ローカルスコープができる

CSS in JS 全般に言えることですが、スコープができることにより、長い命名に悩まされる必要がなくなります。

具体的には、ファイル単位、コンポーネント単位のスコープとなるので、  
下記のような Book コンポーネントと BookList コンポーネントがあった時に、  
どちらのコンポーネントでも Wrapper という名前のコンポーネントを定義して使うことができます。

```
// Book.js
export default ({ book }) => (
  <Wrapper>
    <Title>{book.title}</Title>
    <Author>{book.author}</Author>
  </Wrapper>
)

const Wrapper = styled.div`
  /* Book固有のWrapperスタイル */
`
const Title = styled.h2``
const Author = styled.p``
```

```
// BookList.js
import Book from './Book'

export default ({bookList}) => (
  <Wrapper>
    {bookList.map(book => <Book book={book}/>)}
  </Wrapper>
)

const Wrapper = styled.div`
	/* BookList固有のWrapperスタイル */
`
```

- インストール

```
yarn add styled-components
```

### StyledTextBox と StyledButton を作成してみる

例の様に styled.[タグ]`CSS`;の形でコンポーネントを作成しつつ、CSS を適用できる。

例）

```
const TextBox = styled.input`
    width: 320px;
    font-size: 1.5em;
`;
```

## コンポーネントライブラリ

### コンポーネントライブラリとは

コンポーネントライブラリはテキストボックスやセレクトボックスなどの使用準備が出来たコンポーネントセットを提供してくれる追加ライブラリです。

### Material-UI

https://mui.com/

```
yarn add @mui/material @emotion/react @emotion/styled
```

### Mantine

https://mantine.dev/

```
yarn add @mantine/core @mantine/hooks
```
