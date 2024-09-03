// material-ui
import { useTheme } from '@mui/material/styles';
import { ThemeMode } from 'config';

const logoIconDark = '/assets/images/logo-icon.png';
const logoIcon = '/assets/images/logo-icon.png';

// ==============================|| LOGO ICON SVG ||============================== //

export default function LogoIcon() {
  const theme = useTheme();

  return <img src={theme.palette.mode === ThemeMode.DARK ? logoIconDark : logoIcon} alt="icon logo" width="100" />;
}
