import { logo } from '@/assets';
import { UIImage } from '@/components/ui/UIImage';

export const Top = () => {
  return (
    <div>
      <h1>Top</h1>
      <p>This is the top page.</p>
      <UIImage isEager alt="" height={100} src={logo} width={100} />
    </div>
  );
};
