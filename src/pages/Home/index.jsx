import { useTranslation } from 'react-i18next';
import { Row } from 'antd';

import Content from 'components/Content';
import Title from 'components/Title';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Row>
      <Content>
        <Title>{t('pages.welcomeHome')}</Title>
      </Content>
    </Row>
  );
};

export default Home;
