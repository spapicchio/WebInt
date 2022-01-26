<template>
  <div class="wrap">
    <div class="left">
      <DayPilotNavigator id="nav" :config="navigatorConfig" />
    </div>
    <div class="content">
      <DayPilotCalendar id="dp" :config="config" ref="calendar" />
    </div>
  </div>
  <div class ="container2">
	<h1>Information:</h1>
	<div id="information">
	</div>
  </div>
</template>

<script>
import { DayPilotCalendar, DayPilotNavigator} from '@daypilot/daypilot-lite-vue'

export default {
  name: 'Calendar',
  data: function() {
    return {
      events: [],
      navigatorConfig: {
        showMonths: 1,
        selectMode: "Week",
        startDate: "2022-01-01",
        selectionDay: "2022-01-28",
        onTimeRangeSelected: args => {
          this.config.startDate = args.day;
        }
      },
      config: {
        viewType: "Week",
        startDate: "2022-01-28",
        durationBarVisible: false,
        timeRangeSelectedHandling: "Enabled",
		EventClickHandling : "Bubble",
		EventHoverHandling: "Enabled",
		onEventClick: async (args) => {
			console.log(args.e.data.toolTip);
			var element = document.getElementById("information");
			element.innerHTML = args.e.data.toolTip;

		},
       
        eventDeleteHandling: "Disabled",
		eventMoveHandling: "Disabled",
		eventResizeHandling: "Disabled",
      },
	  
    }
  },
  props: {
  },
  components: {
    DayPilotCalendar,
    DayPilotNavigator
  },
  computed: {
    calendar() {
      return this.$refs.calendar.control;
    }
  },
  methods: {
    loadEvents() {
      // placeholder for an HTTP call
      const events = [
        {
          id: 1,
          start: "2022-01-25T08:45:00",
          end: "2022-01-25T12:00:00",
          text: "Clouds",
          backColor: "#6aa84f",
          borderColor: "#38761d",
		  toolTip: "<p>This is one of the last Cloud classe</p>"
        },
        {
          id: 2,
          start: "2022-01-25T13:30:00",
          end: "2022-01-25T16:45:00",
          text: "Optim",
          backColor: "#6aa84f",
          borderColor: "#38761d",
		  toolTip: "<p>This is one of the last Optim classe</p>"
        },

      ];
      this.calendar.update({events});
    },
  },
  mounted() {
    this.loadEvents();
	
  }
}
</script>

<style>
.wrap {
  display: flex;
}

.left {
  margin-right: 10px;
}

.content {
  flex-grow: 1;
}


.calendar_default_event_inner {
  background: #2e78d6;
  color: white;
  border-radius: 5px;
  opacity: 0.9;
}

.container2{
    display: inline-block;
    margin-top: 20px;
    background-color: white;
    border: 1px solid;
    padding: 0px;
    height: 10%;
    width: 100%;
    box-shadow: 0px 5px 10px 0px #888888;
}

@media (max-width: 1000px) { 
	.wrap {
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: auto auto;
	}
	
	.left {
		grid-column: 1;
		grid-row: 2;
	}

	.content {
		grid-column: 1;
		grid-row: 1;
	}
	
	.aside-2 {
		display: none;
	}
}
</style>