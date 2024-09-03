import { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Grid,
  Box,
  useTheme,
  Pagination,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import MainCard from 'components/MainCard';

interface SupportRecruitListProps {
  tabName: string;
}

export default function SupportRecruitList({ tabName }: SupportRecruitListProps) {
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5); // 페이지당 항목 수
  const theme = useTheme();

  const data = [
    { id: 1, 모집일: '2024.08.14(수)', 배송시간: '새벽(01:00 ~ 07:00)', 거점: tabName, 모집상태: '모집중' },
    { id: 2, 모집일: '2024.08.14(수)', 배송시간: '오전(10:00 ~ 12:00)', 거점: tabName, 모집상태: '모집중' },
    { id: 3, 모집일: '2024.08.15(목)', 배송시간: '오후(14:00 ~ 16:00)', 거점: tabName, 모집상태: '모집중' },
    { id: 4, 모집일: '2024.08.16(금)', 배송시간: '밤(22:00 ~ 24:00)', 거점: tabName, 모집상태: '모집중' },
    { id: 5, 모집일: '2024.08.17(토)', 배송시간: '새벽(01:00 ~ 07:00)', 거점: tabName, 모집상태: '모집중' },
    { id: 6, 모집일: '2024.08.18(일)', 배송시간: '오전(10:00 ~ 12:00)', 거점: tabName, 모집상태: '모집중' }
    // 더 많은 데이터 추가 가능
  ];

  useEffect(() => {
    // 첫 진입 시 첫 번째 로우를 기본 선택
    if (data.length > 0 && !selectedRow) {
      setSelectedRow(data[0]);
    }
  }, [data, selectedRow]);

  const handleRowClick = (rowData: any) => {
    setSelectedRow(rowData);
  };

  const handleChangePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: SelectChangeEvent) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1); // 페이지를 첫 번째로 리셋
  };

  const paginatedData = data.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <Grid container spacing={2}>
      {/* 리스트 부분 */}
      <Grid item xs={12} md={6}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>구분</TableCell>
                <TableCell>모집일</TableCell>
                <TableCell>배송시간</TableCell>
                <TableCell>거점</TableCell>
                <TableCell>모집상태</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((row) => (
                <TableRow
                  key={row.id}
                  onClick={() => handleRowClick(row)}
                  sx={{
                    cursor: 'pointer',
                    backgroundColor: selectedRow?.id === row.id ? theme.palette.action.selected : 'inherit',
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover
                    },
                    fontWeight: selectedRow?.id === row.id ? 'bold' : 'normal'
                  }}
                >
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.모집일}</TableCell>
                  <TableCell>{row.배송시간}</TableCell>
                  <TableCell>{row.거점}</TableCell>
                  <TableCell>{row.모집상태}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
          <Pagination
            count={Math.ceil(data.length / rowsPerPage)}
            page={page}
            size="large"
            variant="contained"
            color="secondary"
            onChange={handleChangePage}
            shape="rounded"
            showFirstButton
            showLastButton
          />
          <FormControl variant="outlined" size="small" sx={{ width: 100 }}>
            <InputLabel id="rows-per-page-label">10 / page</InputLabel>
            <Select labelId="rows-per-page-label" value={rowsPerPage.toString()} onChange={handleChangeRowsPerPage} label="10 / page">
              <MenuItem value={5}>5 / page</MenuItem>
              <MenuItem value={10}>10 / page</MenuItem>
              <MenuItem value={25}>25 / page</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>

      {/* 상세 정보 부분 */}
      <Grid item xs={12} md={6}>
        <MainCard title="지원 상세">
          {selectedRow ? (
            <Box>
              <List disablePadding>
                <ListItem>
                  <ListItemText
                    primary={<Typography variant="subtitle2">모집일 / 거점명 / 지역 / 배송시간 </Typography>}
                    secondary={
                      <Typography variant="body2">
                        {selectedRow.모집일} / 센터1 / 서울특별시 강동구 / {selectedRow.배송시간}
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider />

                <ListItem>
                  <ListItemText
                    primary={<Typography variant="subtitle2">배송 단가</Typography>}
                    secondary={<Typography variant="body2">일반: 3,500원 / 소화물: 1,700원</Typography>}
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary={<Typography variant="subtitle2">취소 정책</Typography>}
                    secondary={<Typography variant="body2">2024.08.14(수) 21:00까지 취소 가능</Typography>}
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary={<Typography variant="subtitle2">노쇼 정책</Typography>}
                    secondary={<Typography variant="body2">최초 1회 노쇼 시 경고, 2회 노쇼 시 영구 배송 제한</Typography>}
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary={<Typography variant="subtitle2">정산 정책</Typography>}
                    secondary={<Typography variant="body2">당월 말일 정산</Typography>}
                  />
                </ListItem>
              </List>
            </Box>
          ) : (
            <Typography variant="body2">상세 정보를 보려면 항목을 선택하세요.</Typography>
          )}
        </MainCard>
      </Grid>
    </Grid>
  );
}
