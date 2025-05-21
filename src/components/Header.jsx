import { AppBar, Toolbar, styled, Box, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useContext } from "react";
import { ColorModeContext } from "../contexts/ThemeContext"; // make sure path is correct

const StyledAppBar = styled(AppBar)({
    background: 'black',
    height: 64,
});

const StyledLink = styled(Link)({
    marginRight: 20,
    fontSize: 14,
    color: 'inherit',
    textDecoration: 'none',
});

const Header = () => {
    const theme = useTheme();
    const { toggleColorMode } = useContext(ColorModeContext);
    const logo = "https://get-staffed.com/wp-content/uploads/2020/07/indeed-logo.png";

    return (
        <StyledAppBar position="static">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <StyledLink to="/">
                        <img src={logo} alt="logo" style={{ width: 95, marginBottom: 6 }} />
                    </StyledLink>
                    <StyledLink to="/create">Post a job</StyledLink>
                    <StyledLink to="/posts">Find jobs</StyledLink>
                </Box>

                {/* Theme Toggle Button */}
                <IconButton onClick={toggleColorMode} color="inherit">
                    {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
            </Toolbar>
        </StyledAppBar>
    );
};

export default Header;
