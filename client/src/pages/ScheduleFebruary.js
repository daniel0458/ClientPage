import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Link } from 'react-router-dom';


const ScheduleFebruary= ({match}) => {
   
    return (
      <div>
  <h1 Style="text-align:center">  <Link exact to="ScheduleJanuary"> <button >◀</button></Link> 2월   <button >▶</button></h1>
          <Table >
          <TableHead>
            <TableRow>
              <TableCell>일</TableCell><TableCell>월</TableCell><TableCell>화</TableCell><TableCell>수</TableCell><TableCell>목</TableCell><TableCell>금</TableCell><TableCell>토</TableCell>  
            </TableRow>
          </TableHead>
          <TableBody>
 
          <TableRow><TableCell></TableCell><TableCell></TableCell><TableCell></TableCell><TableCell></TableCell><TableCell></TableCell><TableCell></TableCell><TableCell>1</TableCell></TableRow>
          <TableRow><TableCell>2</TableCell><TableCell>3</TableCell><TableCell>4</TableCell><TableCell>5</TableCell><TableCell>6</TableCell><TableCell>7</TableCell><TableCell>8</TableCell></TableRow>
          <TableRow><TableCell>9</TableCell><TableCell>10</TableCell><TableCell>11</TableCell><TableCell>12</TableCell><TableCell>13</TableCell><TableCell>14</TableCell><TableCell>15</TableCell></TableRow>
          <TableRow><TableCell>16</TableCell><TableCell>17</TableCell><TableCell>18</TableCell><TableCell>19</TableCell><TableCell>20</TableCell><TableCell>21</TableCell><TableCell>22</TableCell></TableRow>
          <TableRow><TableCell>23</TableCell><TableCell>24</TableCell><TableCell>25</TableCell><TableCell>26</TableCell><TableCell>27</TableCell><TableCell>28</TableCell><TableCell>29</TableCell></TableRow>
          </TableBody>
           
        </Table>
      </div>
  );
  };
  export default ScheduleFebruary;