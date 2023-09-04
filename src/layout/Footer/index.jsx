import { Layout } from 'antd';
import { useTranslation } from 'react-i18next';

const { Footer } = Layout;

export default function CustomFooter() {
  const { t } = useTranslation();

  return (
    <div>
      <Footer style={{ textAlign: 'center' }}>
        {new Date().getFullYear()}©{t('footer.rightsReserved')}
      </Footer>
    </div>
  );
}
