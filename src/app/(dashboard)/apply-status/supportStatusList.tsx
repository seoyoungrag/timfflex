import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Pagination,
  Box,
  Checkbox,
  Button,
  Typography,
  Chip,
  Grid
} from '@mui/material';
import { useState } from 'react';

interface SupportStatusListProps {
  tabName: string;
}

interface Data {
  id: number;
  이름: string;
  연락처: string;
  차량종류: string;
  회원점수: number;
  차량번호: string;
  지원일시: string;
  지원상태: '확정' | '취소' | '대기';
}

export default function SupportStatusList({ tabName }: SupportStatusListProps) {
  const [data, setData] = useState<Data[]>([
    {
      id: 1,
      이름: '조한기',
      연락처: '010-0000-0000',
      차량종류: '승용차',
      회원점수: 20,
      차량번호: '21가 1234',
      지원일시: '2024.08.14(수) 11:10',
      지원상태: '확정'
    },
    {
      id: 2,
      이름: '박주영',
      연락처: '010-0000-0000',
      차량종류: 'SUV',
      회원점수: 20,
      차량번호: '33가 5678',
      지원일시: '2024.08.14(수) 14:15',
      지원상태: '대기'
    },
    {
      id: 3,
      이름: '김철수',
      연락처: '010-0000-0000',
      차량종류: '승용차',
      회원점수: 20,
      차량번호: '21가 1235',
      지원일시: '2024.08.14(수) 11:30',
      지원상태: '취소'
    }
    // 추가 데이터...
  ]);

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const handleStatusChange = (id: number, event: SelectChangeEvent<string>) => {
    const newData = data.map((row) => (row.id === id ? { ...row, 지원상태: event.target.value as Data['지원상태'] } : row));
    setData(newData);
  };

  const handleChangePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: SelectChangeEvent) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = data.map((n) => n.id);
      setSelectedRows(newSelecteds);
      return;
    }
    setSelectedRows([]);
  };

  const handleCheckboxClick = (id: number) => {
    const selectedIndex = selectedRows.indexOf(id);
    let newSelected: number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedRows, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedRows.slice(1));
    } else if (selectedIndex === selectedRows.length - 1) {
      newSelected = newSelected.concat(selectedRows.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selectedRows.slice(0, selectedIndex), selectedRows.slice(selectedIndex + 1));
    }

    setSelectedRows(newSelected);
  };

  const paginatedData = data.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  const statusCounts = data.reduce(
    (acc, curr) => {
      acc[curr.지원상태] += 1;
      return acc;
    },
    { 확정: 0, 대기: 0, 취소: 0 }
  );

  const getStatusColor = (status: Data['지원상태']): 'error' | 'success' | 'warning' => {
    switch (status) {
      case '확정':
        return 'success';
      case '취소':
        return 'error';
      case '대기':
        return 'warning';
      default:
        return 'warning';
    }
  };

  return (
    <>
      <Grid container justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
        <Grid item>
          <Grid container spacing={1}>
            <Grid item>
              <Chip label={`대기 : ${statusCounts.대기}명`} color="warning" />
            </Grid>
            <Grid item>
              <Chip label={`확정 : ${statusCounts.확정}명`} color="success" />
            </Grid>
            <Grid item>
              <Chip label={`취소 : ${statusCounts.취소}명`} color="error" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            일괄처리
          </Button>
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={selectedRows.length > 0 && selectedRows.length < data.length}
                  checked={data.length > 0 && selectedRows.length === data.length}
                  onChange={handleSelectAllClick}
                  color="primary"
                />
              </TableCell>
              <TableCell>구분</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>연락처</TableCell>
              <TableCell>차량종류</TableCell>
              <TableCell>차량번호</TableCell>
              <TableCell>회원점수</TableCell>
              <TableCell>지원일시</TableCell>
              <TableCell>지원상태</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row) => (
              <TableRow
                key={row.id}
                hover
                sx={{
                  backgroundColor: (theme) => theme.palette[getStatusColor(row.지원상태)].lighter
                }}
              >
                <TableCell padding="checkbox">
                  <Checkbox checked={selectedRows.indexOf(row.id) !== -1} onChange={() => handleCheckboxClick(row.id)} color="primary" />
                </TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.이름}</TableCell>
                <TableCell>{row.연락처}</TableCell>
                <TableCell>{row.차량종류}</TableCell>
                <TableCell>{row.차량번호}</TableCell>
                <TableCell>{row.회원점수}</TableCell>
                <TableCell>{row.지원일시}</TableCell>
                <TableCell>
                  <FormControl sx={{ minWidth: 120 }}>
                    <InputLabel id={`status-select-label-${row.id}`}>상태</InputLabel>
                    <Select
                      labelId={`status-select-label-${row.id}`}
                      id={`status-select-${row.id}`}
                      value={row.지원상태}
                      onChange={(event) => handleStatusChange(row.id, event)}
                      sx={{
                        color: (theme) => theme.palette[getStatusColor(row.지원상태)].main
                      }}
                    >
                      <MenuItem value="확정">확정</MenuItem>
                      <MenuItem value="취소">취소</MenuItem>
                      <MenuItem value="대기">대기</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
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
    </>
  );
}
