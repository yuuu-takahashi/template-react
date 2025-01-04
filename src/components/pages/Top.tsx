import { logo } from '@/assets';

import { UIImage } from '../ui/UIImage';

export const Top = () => {
  return (
    <div>
      <h1>Top</h1>
      <p>This is the top page.</p>
      <UIImage src={logo} alt="" width={100} height={100} />
    </div>
  );
};
