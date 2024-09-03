'use client';

import { useState } from 'react';
import { Box, Tabs, Tab, Paper, FormControl, Select, MenuItem, Button, SelectChangeEvent, Typography } from '@mui/material';
import RecruitLists from './recruitLists';

const tabData = ['전체', '동탄HC', '일산TC', '인천TC', '충청TC', '남양주TC'];

export default function RecruitPage() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [deliveryType, setDeliveryType] = useState('전체');

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const handleDeliveryTypeChange = (event: SelectChangeEvent<string>) => {
    setDeliveryType(event.target.value as string);
  };

  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <Paper elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
        {/* Metro-style section */}
        <Box
          sx={{
            backgroundColor: '#f5f5f5',
            borderBottom: '1px solid',
            borderColor: 'divider',
            p: 2,
            display: 'flex',
            alignItems: 'center' // Align items vertically in the center
          }}
        >
          <Typography variant="h6" color="textPrimary" sx={{ fontWeight: 'bold', mr: 2 }}>
            배송구분
          </Typography>
          <FormControl variant="outlined" size="small" sx={{ minWidth: 120, mr: 'auto' }}>
            <Select value={deliveryType} onChange={handleDeliveryTypeChange} displayEmpty inputProps={{ 'aria-label': 'Delivery Type' }}>
              <MenuItem value="전체">전체</MenuItem>
              <MenuItem value="일반배송">일반배송</MenuItem>
              <MenuItem value="새벽배송">새벽배송</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" sx={{ mr: 1 }}>
            모집리스트
          </Button>
          <Button variant="contained" color="secondary">
            모집하기
          </Button>
        </Box>

        {/* Tabs */}
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="Scrollable tabs"
          sx={{
            backgroundColor: 'background.paper',
            borderBottom: '1px solid',
            borderColor: 'divider'
          }}
        >
          {tabData.map((tab, index) => (
            <Tab key={index} label={tab} />
          ))}
        </Tabs>

        {/* Content */}
        <Box sx={{ p: 3 }}>
          <RecruitLists selectedTab={tabData[selectedTab]} />
        </Box>
      </Paper>
    </Box>
  );
}
