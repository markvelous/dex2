import React from 'react'
import { PageHeader } from 'antd';

export default function Header(props) {
  return (
    <div onClick={()=>{
      window.open("https://github.com/markvelous/dex2");
    }}>
      <PageHeader
        title="🎩 Remarkable DEX"
        subTitle=""
        style={{cursor:'pointer'}}
      />
    </div>
  );
}
