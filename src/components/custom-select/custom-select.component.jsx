import React from "react";

import {
	Button,
	MenuItem,
	MenuList,
	Popper,
	Grow,
	Paper,
	ClickAwayListener,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import { useStyles } from "./custom-select.styles";
import clsx from "clsx";

export default function CustomMenu({
	heading,
	menuItems,
	options,
	style,
	className,
	fn = () => null,
}) {
	// extracting objects of classnames
	const classes = useStyles();

	// To handle the menu state
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);

	const handleToggle = () => setOpen((prevOpen) => !prevOpen);
	const handleClose = (event) => setOpen(false);

	function handleListKeyDown(event) {
		if (event.key === "Tab") {
			event.preventDefault();
			setOpen(false);
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open);
	React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current.focus();
		}

		prevOpen.current = open;
	}, [open]);

	// making the selected item as the heading
	const [activeListItem, setActiveListItem] = React.useState(heading);

	const handleClick = (itemName) => {
		setActiveListItem(itemName);
		handleClose();
	};

	return (
		<>
			<Button
				className={clsx(classes.button, className)}
				ref={anchorRef}
				aria-controls={open ? "menu-list-grow" : undefined}
				aria-haspopup='true'
				onClick={handleToggle}
				variant={options?.outlined === true ? "outlined" : "text"}
				endIcon={options?.endIcon === true ? <ArrowDropDownIcon /> : null}
				style={{ ...style }}
			>
				{activeListItem}
			</Button>

			<Popper
				open={open}
				anchorEl={anchorRef.current}
				role={undefined}
				transition
				style={{ zIndex: 1000, left: 0 }}
				placement='bottom-end'
			>
				{({ TransitionProps }) => (
					<Grow {...TransitionProps} style={{ transformOrigin: "left top" }}>
						<Paper>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList
									autoFocusItem={open}
									id='menu-list-grow'
									onKeyDown={handleListKeyDown}
								>
									{menuItems.map((item) => (
										<MenuItem
											onClick={() => handleClick(item.name)}
											key={item.name}
											classes={{ root: classes.menuItem }}
										>
											{item.name}
										</MenuItem>
									))}
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</>
	);
}
