import { Grid } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { result } from "./services/dynamoDB"
const fetchUsers = async () => {
    const users = await fetch("https://jsonplaceholder.typicode.com/users/1");
    return users.json();
}

export default function Dashboard() {

    const { data, status } = useQuery("users", fetchUsers);
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <img src="https://i.ytimg.com/vi/eYGIIc2FOVI/maxresdefault.jpg" style={{ "width": "500px" }} />
                </Grid>
                <Grid item xs={4}>
                    {status === "error" && <p>Error fetching data</p>}
                    {status === "loading" && <p>Fetching data...</p>}
                    {status === "success" && (
                        <div>
                            <p > {data.name} </p>
                            <p > {data.username} </p>
                            <p > {data.email} </p>
                        </div>
                    )}
                </Grid>
                <Grid item xs={4}>
                    <h1>HELLO</h1>
                </Grid>
                <Grid item xs={8}>
                    <h1>HELLO</h1>
                </Grid>
            </Grid>
        </>
    )
}