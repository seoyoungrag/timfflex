import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent
} from '@mui/material';

interface SupportConfirmedListProps {
  tabName: string;
}

export default function SupportConfirmedList({ tabName }: SupportConfirmedListProps) {
  const data = [
    { id: 1, 이름: '조한기', 연락처: '010-0000-0000', 차량종류: '승용차', 차량번호: '21가 1234', 확정일시: '2024.08.14(수) 22:33' },
    { id: 2, 이름: '박주영', 연락처: '010-0000-0000', 차량종류: '화물차', 차량번호: '33나 5678', 확정일시: '2024.08.14(수) 22:30' },
    { id: 3, 이름: '김철수', 연락처: '010-0000-0000', 차량종류: 'SUV', 차량번호: '12다 3456', 확정일시: '2024.08.14(수) 22:28' },
    { id: 4, 이름: '이영희', 연락처: '010-0000-0000', 차량종류: '오토바이', 차량번호: '45라 7890', 확정일시: '2024.08.14(수) 22:25' },
    { id: 5, 이름: '최민수', 연락처: '010-0000-0000', 차량종류: '트럭', 차량번호: '67마 1234', 확정일시: '2024.08.14(수) 22:20' }
  ];

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5); // 페이지당 항목 수

  const handleChangePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: SelectChangeEvent) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1); // 페이지를 첫 번째로 리셋
  };

  const paginatedData = data.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>구분</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>연락처</TableCell>
              <TableCell>차량종류</TableCell>
              <TableCell>차량번호</TableCell>
              <TableCell>확정일시</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.이름}</TableCell>
                <TableCell>{row.연락처}</TableCell>
                <TableCell>{row.차량종류}</TableCell>
                <TableCell>{row.차량번호}</TableCell>
                <TableCell>{row.확정일시}</TableCell>
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
