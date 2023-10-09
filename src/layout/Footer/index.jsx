import { Layout as AntdLayout, Row } from 'antd';
import { useTranslation } from 'react-i18next';

const { Footer: AntdFooter } = AntdLayout;

export default function CustomFooter() {
  const { t } = useTranslation();

  return (
    <Row justify={'center'} align={'middle'}>
      <AntdFooter>
        {new Date().getFullYear()}©{t('footer.rightsReserved')}
      </AntdFooter>
    </Row>
  );
}
