$("document").ready (
    function()
    {
        var audio = new Audio('imperial_march.mp3');

        $("button").click(
            function()
            {
                if ($("input#checkbox_yoda").is(':checked') || $("input#checkbox_yoda").is(':checked') && $("input#checkbox_vader").is(':checked') || $("input#checkbox_yoda").is(':checked') && $("input#checkbox_trooper").is(':checked') || $("input#checkbox_yoda").is(':checked') && $("input#checkbox_vader").is(':checked') && $("input#checkbox_trooper").is(':checked'))
                    return true;

                else if ($("input#checkbox_trooper").is(':checked') || $("input#checkbox_vader").is(':checked') || $("input#checkbox_trooper").is(':checked') && $("input#checkbox_vader").is(':checked'))
                {
                    audio.play();
                    return false;
                }

                else
                    return true;
            }
        )
    }
)
