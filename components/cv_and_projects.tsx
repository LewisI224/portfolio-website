import Grid from '@mui/material/Unstable_Grid2';
import CV from '@/components/cv';
import Projects from '@/components/projects';

export default function CVAndProjects () {

    return (
        <Grid container spacing={2}>
            <Grid xs={6}>
                <CV />
            </Grid>

            <Grid xs={6} display="flex" justifyContent="right">
                <Projects />
            </Grid>
        </Grid>
    );
}