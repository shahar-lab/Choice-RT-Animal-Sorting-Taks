


    // /*this defines the css properties according to the window_screen_size*/
    // var root = document.documentElement;
    // var vis_angle_px = 105
        //---------------------------------------------------------------------------------------------


    /* create timeline */
    var timeline = [];

    
    // /* init connection with pavlovia.org */
	// 	var pavlovia_init = {
	// 		type: jsPsychPavlovia,
	// 		command: "init"
	// 	};
	// 	timeline.push(pavlovia_init);


    /* preload images */
    var preload = {
      type: jsPsychPreload,
      images: ['images/zoo.png','images/keyboard.png','images/space.png','images/1.png', 'images/2.png', 'images/3.png', 'images/4.png', 'images/5.png', 'images/6.png', 'images/7.png', 'images/8.png', 'images/9.png', 'images/10.png', 'images/11.png', 'images/12.png', 'images/13.png', 'images/14.png', 'images/15.png', 'images/16.png', 'images/17.png', 'images/18.png', 'images/19.png', 'images/20.png']
    };
    timeline.push(preload);

    var full_screen = {
                type: jsPsychFullscreen,
                fullscreen_mode: true,
                message: '<p style="text-align: center"> After pressing the button you will switch to full screen mode</p>',
                button_label: 'Continue to full screen mode'
            };


/////****************** welcome and instructions screens *************/////////////////
    var welcome = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: `
      <p>Welcome to the Zoo experiment. Press any key to begin.</p> 
      <div style='float: center;'><img src='images/zoo.png' style="width:639px;height:506px;"></img>
      `,
    };

    timeline.push(full_screen, welcome);

    /* define instructions trial */
    var instructions = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: `
        <p>In this experiment, an animal will appear in the center 
        of the screen.</p><p> As you will see later, each animal belongs to one of two zoos (San Diego and Kansas-City).
        </p><p>Your goal is to remember which animal belongs to each zoo and associate it accordingly.
        </p><p>If the animal belongs to <strong>San-Diego Zoo</strong>, 
        press the letter  <strong>S </strong>  on the keyboard as fast as you can.</p>
        <p>If the animal belongs to <strong>Kansas-City Zoo</strong>, press the letter  <strong>K </strong>
        as fast as you can.</p>
        <p>You will have 4 test blocks in total. In each block, there will be new animals that you will require to remember.</p>
        <div style='width: 700px;'>
        </div>
        <div style='float: center;'><img src='images/keyboard.png' style="width:517px;height:221px;"></img>
        <p>Press any key to begin.</p>
      `,
      post_trial_gap: 50
    };
    timeline.push(instructions);




/////****************** trial sequence *************/////////////////

    var fixation = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: '<div style="font-size:60px;">+</div>',
      choices: "NO_KEYS",
      trial_duration: fixation_duration,
      data: {
        task: 'fixation'
      }
    };
 
    var test = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: function () {
        return "<img src='" + jsPsych.timelineVariable('stimulus') + "'></img>";
      },
      choices: ['s', 'k'],
      data: {
        task: 'response',
        correct_response: jsPsych.timelineVariable('correct_response')
      },
      on_finish: function(data){
        data.correct = jsPsych.pluginAPI.compareKeys(data.response, data.correct_response);
      }
    };

    var finish_block = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: '<p> Good job! The current block is over. </p>' +
      ' You can stretch a little and take a short break while sitting in front of the screen, if needed.</p><p> <br><br><br><b> Press SPACE to continue</b></p>',
      post_trial_gap: 50,
      on_finish: function () {
                block += 1;
            }
    };


///////***********  define blocks of set-size 2, 4, 6 and 8 targets ***********///////////
var trials_block_1 = {
      timeline: [fixation, test],
      timeline_variables: test_stimuli_2,
      sample: {
        type: 'with-replacement',
        size: 1
    },
      repetitions: Ntrials,
      randomize_order: true,
      data: {
                set_size: '2',
                block_num: block,
                object1: test_stimuli_2[0].stimulus,
                object2: test_stimuli_2[1].stimulus
            },
    };
    

    var trials_block_2 = {
      timeline: [fixation, test],
      timeline_variables: test_stimuli_4,
      sample: {
        type: 'with-replacement',
        size: 1
    },
      repetitions: Ntrials,
      randomize_order: true,
      data: {
                set_size: '4',
                block_num: block,
                object1: test_stimuli_4[0].stimulus,
                object2: test_stimuli_4[1].stimulus,
                object3: test_stimuli_4[2].stimulus,
                object4: test_stimuli_4[3].stimulus
            },
    };

    var trials_block_3 = {
      timeline: [fixation, test],
      timeline_variables: test_stimuli_6,
      sample: {
        type: 'with-replacement',
        size: 1
    },
      repetitions: Ntrials,
      randomize_order: true,
      data: {
                set_size: '6',
                block_num: block,
                object1: test_stimuli_6[0].stimulus,
                object2: test_stimuli_6[1].stimulus,
                object3: test_stimuli_6[2].stimulus,
                object4: test_stimuli_6[3].stimulus,
                object5: test_stimuli_6[4].stimulus,
                object6: test_stimuli_6[5].stimulus
            },

    };

    var trials_block_4 = {
      timeline: [fixation, test],
      timeline_variables: test_stimuli_8,
      sample: {
        type: 'with-replacement',
        size: 1
    },
      repetitions: Ntrials,
      randomize_order: true,
      data: {
                set_size: '8',
                block_num: block,
                object1: test_stimuli_8[0].stimulus,
                object2: test_stimuli_8[1].stimulus,
                object3: test_stimuli_8[2].stimulus,
                object4: test_stimuli_8[3].stimulus,
                object5: test_stimuli_8[4].stimulus,
                object6: test_stimuli_8[5].stimulus,
                object7: test_stimuli_8[6].stimulus,
                object8: test_stimuli_8[7].stimulus
            },
    };
   
///////***********  suffele the blocks to provide counter balance ***********///////////
  var num_of_blocks = [0, 1, 2, 3];
  var shuffled = shuffle_arr(num_of_blocks)
  var blocks = [block_start_1, block_start_2, block_start_3, block_start_4]
  var trials = [trials_block_1, trials_block_2, trials_block_3, trials_block_4]

    for (let i = 0; i < shuffled.length; i++) {
      timeline.push(blocks[shuffled[i]], trials[shuffled[i]], finish_block)

  }


  ///////**********************///////////
/* finish connection with pavlovia.org */
    // var pavlovia_finish = {
    //     type: jsPsychPavlovia,
    //     command: "finish",
    //     participantId: "JSPSYCH-DEMO"
    // };
    // timeline.push(pavlovia_finish);
  jsPsych.run(timeline);