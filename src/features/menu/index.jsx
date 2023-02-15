import { Link } from "react-router-dom";
import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu as MenuAntd } from 'antd';
import { useState } from 'react';
import { Button } from "../../entities/Button"
function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

const items = [
    getItem('Navigation One', 'sub1', <MailOutlined />, [
      getItem('Option 1', '1'),
      getItem('Option 2', '2'),
      getItem('Option 3', '3'),
      getItem('Option 4', '4'),
    ]),
    getItem('Navigation Two', 'sub2', <MailOutlined />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
    getItem('Navigation Three', 'sub4', <SettingOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]),
  ];
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
export const Menu=()=>{
    const [openKeys, setOpenKeys] = useState(['']);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
    
    return(
        
        <>
           <MenuAntd
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                style={{
                    width: '100%',
                }}
                items={items}
            />
        {/* <Link to="/bar">
            <Button title="Бар" />
        </Link>
        <Link to="/kitchen">
            <Button title="Кухня" />
        </Link> */}
        </>
    )
}