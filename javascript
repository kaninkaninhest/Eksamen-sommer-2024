<script>
jQuery(document).ready(function() {

    function toggleDarkMode() {
        jQuery('body').toggleClass('dark-mode');
        localStorage.setItem('darkMode', jQuery('body').hasClass('dark-mode'));
    }

    function replaceSvgColorWithNewColor() {
        jQuery('svg').each(function() {
            jQuery(this).find('*').each(function() {
                var fill = jQuery(this).css('fill');
                if (fill && (fill === 'rgb(60, 179, 113)' || fill === '#3CB371')) {
                    jQuery(this).attr('data-original-fill', fill);
                    jQuery(this).css('fill', '#121212');
                }
            });
        });
    }

    if (localStorage.getItem('darkMode') === 'true') {
        jQuery('body').addClass('dark-mode');
        jQuery('#dark-mode-toggle').prop('checked', true);
        replaceSvgColorWithNewColor();
    } else {
        jQuery('body').removeClass('dark-mode');
        jQuery('#dark-mode-toggle').prop('checked', false);
    }

    jQuery('#dark-mode-toggle').change(function() {
        toggleDarkMode();
        if (jQuery('body').hasClass('dark-mode')) {
            replaceSvgColorWithNewColor();
        } else {
            jQuery('svg').find('[data-original-fill]').each(function() {
                var originalFill = jQuery(this).attr('data-original-fill');
                jQuery(this).css('fill', originalFill);
            });
        }
    });
});

</script>

<script>
document.addEventListener('DOMContentLoaded', function() {
    for (let i = 1; i <= 6; i++) {
        const checkbox = document.getElementById(`toggle-strikethrough-${i}`);
        const textElement = document.querySelector(`.step${i}`);

        if (checkbox && textElement) {
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    textElement.classList.add('strikethrough');
                } else {
                    textElement.classList.remove('strikethrough');
                }
            });
        } else {
            if (!checkbox) {
                console.error(`Checkbox with ID toggle-strikethrough-${i} not found`);
            }
            if (!textElement) {
                console.error(`Text element with class step${i} not found`);
            }
        }
    }
});
</script>
