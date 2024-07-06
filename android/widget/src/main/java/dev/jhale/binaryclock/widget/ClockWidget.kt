package dev.jhale.binaryclock.widget

import android.app.AlarmManager
import android.app.AlarmManager.RTC
import android.app.PendingIntent
import android.appwidget.AppWidgetManager
import android.appwidget.AppWidgetProvider
import android.content.ComponentName
import android.content.Context
import android.content.Intent
import android.util.Log
import android.widget.RemoteViews
import java.util.Calendar
import java.util.Timer
import kotlin.concurrent.scheduleAtFixedRate

/**
 * Implementation of App Widget functionality.
 */
class ClockWidget : AppWidgetProvider() {
    override fun onUpdate(
        context: Context,
        appWidgetManager: AppWidgetManager,
        appWidgetIds: IntArray
    ) {
        // There may be multiple widgets active, so update all of them
        for (appWidgetId in appWidgetIds) {
            updateAppWidget(context, appWidgetManager, appWidgetId)
        }
    }

    override fun onReceive(context: Context, intent: Intent?) {
        super.onReceive(context, intent)
        Log.d("widget:receive:update", "Widget update request received")
        scheduleWidgetUpdate(context)
    }

    override fun onEnabled(context: Context) {
        // Enter relevant functionality for when the first widget is created
    }

    override fun onDisabled(context: Context) {
        // Enter relevant functionality for when the last widget is disabled
    }
}

internal fun updateAppWidget(
    context: Context,
    appWidgetManager: AppWidgetManager,
    appWidgetId: Int
) {
//    val widgetText = context.getString(R.string.appwidget_text)
    // Construct the RemoteViews object
    val views = RemoteViews(context.packageName, R.layout.clock_widget)

//    val ticker = TextClock(context, TextClock.class)
//    ticker.addTextChangedListener() //https://developer.android.com/reference/android/widget/TextView#addTextChangedListener(android.text.TextWatcher)
    Timer().scheduleAtFixedRate(0, 1_000) {
        views.setTextViewText(R.id.appwidget_text, "${currentClockTime()}")
        // Instruct the widget manager to update the widget
        appWidgetManager.updateAppWidget(appWidgetId, views)
    }

}

///////////////////////////////////////////////////////////////////////////////////////////////////
// Scheduled Updates
///////////////////////////////////////////////////////////////////////////////////////////////////

data class ClockTime(
    val hours: Int,
    val minutes: Int,
    val seconds: Int,
)
internal fun currentClockTime(): ClockTime {
    val calendar = Calendar.getInstance()
    return ClockTime(
        calendar.get(Calendar.HOUR_OF_DAY),  // HOUR_OF_DAY (24 hr) vs. HOUR (12 hr)
        calendar.get(Calendar.MINUTE),
        calendar.get(Calendar.SECOND),
    )
}

private fun scheduleWidgetUpdate(context: Context) {
    val alarms = context.getSystemService(Context.ALARM_SERVICE) as AlarmManager
    val intent = widgetUpdatePendingIntent(context)
    val nextUpdateMillis = System.currentTimeMillis() + (1_000 * 60 * 15)
    alarms.setExact(RTC, nextUpdateMillis, intent)
    Log.i("widget:schedule:update", "Scheduled next update for $nextUpdateMillis - ${currentClockTime().copy(seconds = currentClockTime().minutes + 15)}")
}

private fun widgetUpdatePendingIntent(context: Context): PendingIntent {
    val UNSPECIFIED_REQUEST = 0
    return PendingIntent.getBroadcast(
        context,
        UNSPECIFIED_REQUEST,
        widgetUpdateIntent(context),
        PendingIntent.FLAG_IMMUTABLE
    )
}

private fun widgetUpdateIntent(context: Context): Intent {
    val provider = ClockWidget::class.java
    val appWidgetManager = AppWidgetManager.getInstance(context)
    val ids = appWidgetManager
        ?.getAppWidgetIds(ComponentName(context, provider)) ?: intArrayOf()
    Log.d("widget:intent:prepare", "ids: ${ids.contentToString()}")
    return Intent(context, provider).also {
        it.action = AppWidgetManager.ACTION_APPWIDGET_UPDATE
        it.putExtra(AppWidgetManager.EXTRA_APPWIDGET_IDS, ids)
    }
}