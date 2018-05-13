import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import data from '../api/data';
import { Link } from 'react-router-dom'

const styles = theme => ({
    root: {
        margin: 'auto',
        justifyContent: 'center', 
        alignItems: 'center',
        width: '100%',
        maxWidth: 440,
        backgroundColor: theme.palette.background.paper,
    },
});

class StaffList extends React.Component {
    state = {

    };

    render() {
        const { classes } = this.props;

        return (
         <div className={classes.root}>
             <List className={classes.ListStyle} style={{padding: 20}}>
              {data.map(item => (
                <Link to={`/data/${item.first}`} key={item.name}>  
                <ListItem
                  key={item.id}
                  dense
                  button
                  className={classes.listItem}
                  style={{paddingLeft: 70, borderRadius: 20, marginTop: 5, marginBottom: 5}}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={item.avatar_url}
                    style={{ height: 100, width: 100}}
                  />
                  <ListItemText style={{ marginLeft: 40, fontSize: 20, fontWeight: '900' }} primary={`${item.first} ${item.last}`} />
                </ListItem>
               </Link>  
              ))}
            </List>
          </div>
       
        )
    }
}

StaffList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StaffList);
