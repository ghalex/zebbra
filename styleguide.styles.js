const colors = {
  primary: '#3273dc',
  success: '#00d1b2',
  blue: '#00aefc',
  light: '#ebf1f3'
}

module.exports = {
  styles: {
    ComponentsList: {
      heading: {
        fontWeight: '700 !important'
      }
    },
    Heading: {
      heading1: {
        display: 'block',
        position: 'relative',
        paddingBottom: '0.75rem',
        marginBottom: '0.75rem',
        fontWeight: 700,
        '&:before': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '6rem',
          height: '4px',
          backgroundColor: colors.primary,
          borderRadius: '4px'
        },
        '& > a': {
          fontWeight: '700 !important'
        }
      }
    },
    ReactComponent: {
      tabs: {
        backgroundColor: colors.light,
        padding: `0.5rem 1rem`,
        overflow: 'auto'
      },
      tabButtons: {
        marginBottom: 0
      }
    },
    TabButton: {
      button: {
        width: '100%'
      },
      isActive: {
        border: 0
      }
    },
    Table: {
      table: {
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
        minWidth: '600px'
      }
    },
    StyleGuide: {
      sidebar: {
        border: 0,
        '& li > a': {
          color: `#fff !important`
        }
      },
      logo: {
        border: 0,
        paddingBottom: 0,
        '& .rsg-logo': {
          display: 'block',
          margin: '-0.5rem',
          padding: '0.5rem',
          transition: 'all 250ms ease',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          fontSize: '24px',
          cursor: 'pointer',
          opacity: 0.8,
          color: 'white'
        },
        '& .rsg-logo-name, & .rsg-logo-version': {
          display: 'inline-block',
          verticalAlign: 'middle',
          pointerEvents: 'none'
        },
        '& .rsg-logo-name': {
          fontWeight: 700
        },
        '& .rsg-logo-version': {
          marginLeft: '0.25rem',
          opacity: 0.5
        }
      }
    }
  },
  theme: {
    sidebarWidth: 220,
    color: {
      sidebarBackground: colors.primary,
      codeBackground: colors.light
    },
    fontFamily: {
      base: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      monospace: 'Consolas, "Liberation Mono", Menlo, monospace'
    }
  }
}
