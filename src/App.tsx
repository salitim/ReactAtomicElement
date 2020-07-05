import * as React from 'react';
import ThemeProvider from './compose/core/ThemeProvider/index';
import Span from './components/atoms/Span/index';
<<<<<<< HEAD
import Lister from './components/atoms/List/Lister';

const items = ['test', 'test2', 'test3'];
const classNameList = 'list';
const classNameLister = 'Lister';
const itemType = 'li';
||||||| merged common ancestors
=======
import AppBar from './components/organisms/AppBar/index';

const navigation = ['Home', 'Contact', 'About us'];
>>>>>>> fa90d1f7afc8ee9e945691b9c1687e927e531928

const App = (): JSX.Element => {
  React.useEffect(() => {});

  return (
<<<<<<< HEAD
    <>
      <Span text="Mon bien beau span" />
      <Lister.ol
        items={items}
        classNameList={classNameList}
        classNameLister={classNameLister}
        itemType={itemType}
      />
    </>
||||||| merged common ancestors
    <>
      <Span text="Mon bien beau span" />
    </>
=======
    <ThemeProvider>
      <AppBar navigation={navigation} />
      <Span style={{ background: 'red' }} text="Mon bien beau span" />
    </ThemeProvider>
>>>>>>> fa90d1f7afc8ee9e945691b9c1687e927e531928
  );
};

export default App;
