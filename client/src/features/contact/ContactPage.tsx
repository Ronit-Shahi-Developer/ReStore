import { Button, ButtonGroup, Typography } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { decrement, increment } from "./counterSlice";

export default function ContactPage() {
    // const dispatch = useDispatch();
    const dispatch = useAppDispatch();
  // const  data = useSelector((state: CounterState) => state.data);
  // const  title = useSelector((state: CounterState) => state.title);
  const {data, title} = useAppSelector(state => state.counter);
  return (
    <>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="h5">the data is: {data}</Typography>
        <ButtonGroup>
            <Button variant="contained" color="error" onClick={() => dispatch(decrement(1))}>Decrement</Button>
            <Button variant="contained" color="primary" onClick={() => dispatch(increment(1))}>Increment</Button>
            <Button variant="contained" color="secondary" onClick={() => dispatch(increment(5))}>Increment by 5</Button>
        </ButtonGroup>
    </>
  );
}
