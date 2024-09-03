import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { DatePicker } from '@mui/x-date-pickers';
import { ArrowRight2, ArrowLeft2, Calendar } from 'iconsax-react';
import { Box, Button, Grid, Paper, TextField, Typography, IconButton } from '@mui/material';
import { useState } from 'react';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import SupportRecruitList from './supportRecruitList';
import SupportStatusList from './supportStatusList';
import SupportConfirmedList from './supportConfirmedList';

export default function RecruitLists({ selectedTab }: { selectedTab: string }) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handlePrevDate = () => {
    if (selectedDate) {
      setSelectedDate(new Date(selectedDate.getTime() - 24 * 60 * 60 * 1000));
    }
  };

  const handleNextDate = () => {
    if (selectedDate) {
      setSelectedDate(new Date(selectedDate.getTime() + 24 * 60 * 60 * 1000));
    }
  };

  // Format date as "YYYY.MM.DD (요일)"
  const formattedDate = selectedDate ? format(selectedDate, 'yyyy.MM.dd (EEEE)', { locale: ko }) : '';

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ko}>
      <Box>
        <Grid container spacing={1} sx={{ mb: 4 }} alignItems="center">
          <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
            <Button onClick={handlePrevDate} sx={{ minWidth: 'auto', padding: '6px' }}>
              <ArrowLeft2 style={{ fontSize: '24px', color: '#333' }} />
            </Button>
          </Grid>
          <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
            <DatePicker
              value={selectedDate}
              sx={{ width: 80 }}
              onChange={(date) => setSelectedDate(date)}
              slots={{
                textField: (params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    sx={{
                      '& .MuiInputBase-input': {
                        fontSize: '1.25rem',
                        textAlign: 'left',
                        fontWeight: 'medium'
                      },
                      '& .MuiInput-underline:before': {
                        borderBottom: 'none'
                      },
                      '& .MuiInput-underline:after': {
                        borderBottom: 'none'
                      }
                    }}
                    value={formattedDate} // Use formatted date as value
                  />
                )
              }}
            />
          </Grid>
          <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
            <Button onClick={handleNextDate} sx={{ minWidth: 'auto', padding: '6px' }}>
              <ArrowRight2 style={{ fontSize: '24px', color: '#333' }} />
            </Button>
          </Grid>
        </Grid>
        <Paper sx={{ mb: 2, p: 2 }}>
          <Typography variant="h5" color="success" fontWeight="bold" textTransform="uppercase">
            {selectedTab} 지원 모집{' '}
            <Box component="span" fontWeight="normal" display="inline">
              리스트
            </Box>
          </Typography>
          <SupportRecruitList tabName={selectedTab} />
        </Paper>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h5" color="success" fontWeight="bold" textTransform="uppercase">
                {selectedTab} 지원 현황{' '}
                <Box component="span" fontWeight="normal" display="inline">
                  리스트
                </Box>
              </Typography>
              <SupportStatusList tabName={selectedTab} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h5" color="success" fontWeight="bold" textTransform="uppercase">
                {selectedTab} 지원 확정{' '}
                <Box component="span" fontWeight="normal" display="inline">
                  리스트
                </Box>
              </Typography>
              <SupportConfirmedList tabName={selectedTab} />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </LocalizationProvider>
  );
}
