import React, {FC} from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";


const MyPopover: FC<any> = ({anchorEl , open, handlePopoverClose , children}) => {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            popover: {
                pointerEvents: 'none',
            },
            paper: {
                padding: theme.spacing(1),
            },
        }),
    );
    const classes = useStyles();
    return (
        <>
            <Popover
                id="mouse-over-popover"
                className={classes.popover}
                open={open}
                classes={{
                    paper: classes.paper,
                }}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography>{children}</Typography>
            </Popover>
        </>
    )
}
export default MyPopover