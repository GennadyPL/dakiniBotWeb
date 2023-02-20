import { MailOutlined, SettingOutlined,AppstoreOutlined } from '@ant-design/icons';
import { Menu as MenuAntd,Button } from 'antd';
import {Menu} from '../../widgets/Menu'

import {data} from '../../shared/data'
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
let items = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ])
];

items = Object.keys(data).map(item=>{
    let obj1= data[item];
    // debugger;
    return getItem(item,item,<AppstoreOutlined/>,Object.keys(obj1).map(item=>
        {
            
            let obj= obj1[item];
            // debugger;

            return getItem(item,item,<AppstoreOutlined/>,obj.map(item=>{
            // debugger;
                
                return getItem(item.name, item.name,null)
                // return <Button>Dashed Button</Button>
            }))
        }));
})
    // return getItem()
// debugger;
export const MenuPages = () => {

    // debugger;    
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <>
    <Menu
      items={items}
    />
    
    <MenuAntd
      onClick={onClick}
      style={{
        width: "100%",
      }}
      mode="inline"
      items={items}
      />
    </>
  );
};
 
