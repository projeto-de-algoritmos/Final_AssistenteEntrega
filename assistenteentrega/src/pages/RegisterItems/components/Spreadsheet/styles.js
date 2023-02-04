import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 1px solid black
`

const SpreadSheetTable = styled.table`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const SpreadSheetTr = styled.tr`
`

const SpreadSheetContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const HeaderTitle = styled.th`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0px 100px;
  border: 2px solid black;
`

const ItemTitle = styled.td`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0px 100px;
  border: 2px solid black;
`

export {
  Container,
  SpreadSheetTable,
  SpreadSheetContent,
  SpreadSheetTr,
  HeaderTitle,
  ItemTitle
}