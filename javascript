// Funktion til dark mode

<script>
jQuery(document).ready(function($) {

    function toggleDarkMode() {
        $('body').toggleClass('dark-mode');
        localStorage.setItem('darkMode', $('body').hasClass('dark-mode'));
    }

    if (localStorage.getItem('darkMode') === 'true') {
        $('body').addClass('dark-mode');
        $('#dark-mode-toggle').prop('checked', true);
    } else {
        $('body').removeClass('dark-mode');
        $('#dark-mode-toggle').prop('checked', false);
    }

    function replaceSvgColorWithNewColor() {
        $('svg').each(function() {
            $(this).find('*').each(function() {
                var fill = $(this).css('fill');
                if (fill && (fill === 'rgb(60, 179, 113)' || fill === '#3CB371')) {
                    $(this).attr('data-original-fill', fill);
                    $(this).css('fill', '#121212');
                }
            });
        });
    }

    if ($('body').hasClass('dark-mode')) {
        replaceSvgColorWithNewColor();
    }

    $('#dark-mode-toggle').change(function() {
        toggleDarkMode();
        if ($('body').hasClass('dark-mode')) {
            replaceSvgColorWithNewColor();
        } else {
            $('svg').find('[data-original-fill]').each(function() {
                var originalFill = $(this).attr('data-original-fill');
                $(this).css('fill', originalFill);
            });
        }
    });
});

</script>
