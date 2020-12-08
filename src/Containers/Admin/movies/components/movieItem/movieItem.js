import React from "react";
import PropTypes from "prop-types";
import { Button, Icon } from "@material-ui/core";
import BuildIcon from "@material-ui/icons/Build";
import DeleteIcon from "@material-ui/icons/Delete";
import { red } from "@material-ui/core/colors";
MovieItem.propTypes = {
  movieList: PropTypes.array,
};

function MovieItem(props) {
  function handleUpdate(value) {
    props.handleUpdate(value);
  }

  function handleDelete(id) {
    props.handleDelete(id);
  }

  return (
    <>
      {props.movieList.map((item, index) => {
        return (
          <tr
            style={{ backgroundColor: index % 2 === 0 ? "beige" : "white" }}
            key={item.maPhim}
          >
            <td>{item.maPhim}</td>
            <td>{item.tenPhim}</td>
            <td>{item.danhGia}</td>
            <td>{item.ngayKhoiChieu}</td>
            <td>
              <img
                src={item.hinhAnh}
                alt="hinhAnh"
                style={{ width: "45px", height: "70px" }}
              />
            </td>
            <td className="d-flex justify-content-center">
              <Button
                size="small"
                style={{
                  outline: "none",
                  minWidth: "32px",
                  marginRight: "10px",
                }}
                onClick={() => {
                  handleUpdate(item);
                }}
                data-toggle="modal"
                data-target="#movieModal"
              >
                <BuildIcon
                  className="text-success"
                  fontSize="small"
                  style={{ padding: 0 }}
                />
              </Button>
              <Button
                className="text-primary"
                size="small"
                style={{
                  outline: "none",
                  minWidth: "32px",
                  marginRight: "10px",
                }}
                onClick={() => {
                  props.handleSchedule(item);
                }}
                data-toggle="modal"
                data-target="#scheduleModal"
              >
                <Icon fontSize="small" style={{ padding: 0 }}>
                  add_circle
                </Icon>
              </Button>
              <Button
                size="small"
                style={{ outline: "none", minWidth: "32px" }}
                onClick={() => {
                  handleDelete(item.maPhim);
                }}
              >
                <DeleteIcon fontSize="small" style={{ color: red[500] }} />
              </Button>
            </td>
          </tr>
        );
      })}
    </>
  );
}

export default MovieItem;